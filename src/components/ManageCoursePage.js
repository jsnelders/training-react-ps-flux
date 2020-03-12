import React from 'react';
import { Prompt } from 'react-router-dom';



const ManageCoursePage = (props) => {
    // debugger;

    return (
        <>
            <h2>Manage Course</h2>
            <Prompt when={false} message="Are you sure you want to leave?" />

            <p>
                {props.match.params.slug}
            </p>
        </>
    );
}

export default ManageCoursePage;