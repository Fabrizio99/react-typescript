import React, { useEffect, useRef, useState } from 'react'
import { getBooks } from './services';

export const BookList = () => {
    const [books, setBooks] = useState<any[]>([])
    const mountedRef = useRef(true)

    useEffect(() => {
        console.log('useeffect')
        getBooks().then(books => {
            console.log('api')
            if(!!mountedRef.current){
                console.log('entra aca')
                setBooks(books)
            }
        })

        return () => {
            mountedRef.current = false;
        }
    }, [])
    return (
        <div>
            {
                books.map((b, i) => (
                    <p key={i}>
                        {b.name}
                    </p>
                ))
            }
        </div>
    )
}



export const HookPage = () => {
    const [fetchBokks, setFetchBokks] = useState<boolean>(false)
    return (
        <div>
            <h1>Books!!</h1>
            <button onClick={() => setFetchBokks(!fetchBokks)}>Fetch Books</button>
            {
                fetchBokks && <BookList/>
            }
        </div>
    )
}
