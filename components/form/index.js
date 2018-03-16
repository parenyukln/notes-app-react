import React, { Component } from 'react';

import './index.css';

export default class Form extends Component {
    state = { name: '', text: '' }

    changeName = event => this.setState({ name: event.target.value })
    changeText = event => this.setState({ text: event.target.value })

    submit = () => {
        const { submit } = this.props;
        const { name, text } = this.state;

        submit(name, text);

        this.setState({ name: '', text: '' });
    }

    render() {
        const { name, text } = this.state;

        return (
            <div className="form">
                <input
                    value={name}
                    onChange={this.changeName}
                    pattern="[A-Za-z]+"
                    placeholder="Ключ заметки" />
                <textarea
                    value={text}
                    onChange={this.changeText}
                    placeholder="Текст заметки" />
                <button onClick={this.submit}>Добавить новую заметку</button>
            </div>
        );
    }
};