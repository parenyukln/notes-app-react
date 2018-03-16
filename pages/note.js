// Страница конкретной заметки
// Например /notes/Books

// Компонент-ссылка для переходов между страницами без перезагрузки страницы
import Link from 'next/link';
import React, { Component, Fragment } from 'react';

export default class NotePage extends Component {
    state = { note: null }

    // Метод Next.js, который выполнится для того чтобы получить данные необходимые для страницы
    // и передаст их в props
    // Выполнится как и на сервере, так и в браузере
    // Может быть объявлен ТОЛЬКО в страницах
    // Подробнее: https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
    static async getInitialProps({ req, query }) {
        const name = req
            ? req.params.note
            : query.note;

        const response = await fetch(`http://localhost:3000/api/notes/${name}`);
        const note = await response.json();

        return { note };
    }

    render() {
        const { note } = this.props;

        return (
            <Fragment>
                <Link href="/notes">
                    <a>&lt; Back to notes list</a>
                </Link>
                <h1>{note.name}</h1>
                <p>{note.text}</p>
            </Fragment>
        );
    }
};
