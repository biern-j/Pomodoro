import React from 'react';

const NewPomodoroTimer = ({value, handleChange}) =>
    <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={value} onChange={() => handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>;

export default NewPomodoroTimer