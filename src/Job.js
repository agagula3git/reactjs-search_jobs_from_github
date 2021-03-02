import React, {useState} from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({job}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted 
                            font-weight-lighter">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
        	                {job.type}
                        </Badge>
                        <Badge variant="secondary">
                            {job.location}
                        </Badge>
                        <div style={{wordBreak:'break-all'}}>
                            <ReactMarkdown source={job.how_to_apply}/>
                        </div>
                        <Card.Text className="mt-2">
                        <Button 
                            variant="primary" 
                            onClick = {()=> setIsOpen(prevIsOpen => !prevIsOpen)}
                        >
                            {isOpen ? 'Hide Details' : 'View Details'}
                        </Button>
                        </Card.Text>
                        <Collapse in={isOpen}>
                            <div className='mt-2'>
                                <ReactMarkdown source={job.description}/>
                            </div>
                        </Collapse>
                    </div>
                    <img className="d-none d-md-block" alt={job.company} height="50" src={job.company_logo}/>
                </div>
            </Card.Body>
        </Card>
    )
}
