// Страница со списком всех заметок. /notes

import React, { Component, Fragment } from 'react';

import Form from '../components/form';
import Notes from '../components/notes';

export default class IndexPage extends Component {
    state = { notes: null }

    // Метод Next.js, который выполнится для того чтобы получить данные необходимые для страницы
    // и передаст их в props
    // Выполнится как и на сервере, так и в браузере
    // Может быть объявлен ТОЛЬКО в страницах
    // Подробнее: https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
    static async getInitialProps() {
        const response = await fetch('http://localhost:3000/api/notes');
        const notes = await response.json();

        return { notes };
    }

    // Получив список заметок в props, перекладываем его в state
    // для того, чтобы дальнейшем состоянием управлять внутри компонента
    static getDerivedStateFromProps({ notes }) {
        return { notes };
    }

    // Метод для отправки данных из формы на сервер
    // После успешной отправки делается запрос за обновившимся списком заметок
    submitForm = (name, text) => {
        fetch('/api/notes', {
            body: JSON.stringify({ name, text }),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => fetch('http://localhost:3000/api/notes'))
            .then(response => response.json())
            .then(notes => this.setState({ notes }));
    }

    render() {
        const { notes } = this.state;

        return (
            <Fragment>
                <Notes notes={notes} />
                <Form submit={this.submitForm} />
            </Fragment>
        );
    }
};