import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobsPagination({page, setPage}) {
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick = {()=> setPage(prevPage=>prevPage-1)}/>}
            {page !== 1 && <Pagination.Item onClick = {()=> setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Elipsis/>}
            {page > 2 &&<Pagination.Item onClick = {()=> setPage(prevPage=>prevPage-1)}>{page-1}</Pagination.Item>}
            <Pagination.Item active >{page}</Pagination.Item>
            <Pagination.Item onClick = {()=> setPage(prevPage=>prevPage+1)}>{page+1}</Pagination.Item>
            <Pagination.Next onClick = {()=> setPage(prevPage=>prevPage+1)}/>
        </Pagination>
    )
}
