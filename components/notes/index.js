import React from 'react';
import Link from 'next/link';

export default function Notes({ notes }) {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.name}>
                    <Link
                        as={`/notes/${note.name}`}
                        href={{ pathname: '/note', query: { note: note.name } }}>
                            <a>{note.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
