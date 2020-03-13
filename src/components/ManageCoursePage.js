import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
//import * as courseApi from '../api/courseApi';
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import { toast } from 'react-toastify';



const ManageCoursePage = (props) => {
    // debugger;

	const [errors, setErrors] = useState({});
	
	const [ courses, setCourses] = useState(courseStore.getCourses());

    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });



    useEffect( () => {
		courseStore.addChangeListener(onChange);
		
		const slug = props.match.params.slug;   // From the path `/course/:slug`
		
		if (courses.length === 0)
		{
			courseActions.loadCourses();
		}
        else if (slug)
        {
            // courseApi.getCourseBySlug(slug).then((_course) => {
            //     setCourse(_course);
			// });

			setCourse(courseStore.getCourseBySlug(slug));
		}
		
		return () => courseStore.removeChangeListener(onChange);	// cleanup on unmount
    }, [courses.length, props.match.params.slug]);



	function onChange()
	{
		setCourses(courseStore.getCourses());
	}


    function handleChange(event) {
        // const updatedCourse = {...course};
        // updatedCourse.title = event.target.value
        
        //const updatedCourse = {...course, title: event.target.value};

        const target = event.target;

        const updatedCourse = {...course, [target.name]: target.value};

        // console.log("handleChange(): updatedCourse=", updatedCourse);
        
        setCourse(updatedCourse);
    }



    function formIsValid()
    {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);

        // Form is valid if _errors has not properties.

        return Object.keys(_errors).length === 0;
    }



    function handleSubmit(event)
    {
        event.preventDefault();

        if (formIsValid() === false) return; // Invalid

        console.log("handleSubmit(): course=", course);

        // courseApi.saveCourse(course).then( () => {
        //     props.history.push("/courses");
        //     toast.success("Course saved.");
		// });   // Pass the course that's held in state.
		
		courseActions.saveCourse(course).then( () => {
            props.history.push("/courses");
            toast.success("Course saved.");
        });   // Pass the course that's held in state.
    }

    return (
        <>
            <h2>Manage Course</h2>
            <Prompt when={false} message="Are you sure you want to leave?" />

            <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
}

export default ManageCoursePage;