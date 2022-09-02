import {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const Register = () => {
    // const [email, setEmail] = useState('admin@app.com')
    // const [password, setPassword] = useState('')
    const [auth, setAuth] = useState({
        email: '',
        passeord: ''
    })
  return (
    <div className='mt-5'>
         <Row>
            <Col xs={12} md={{span: 6, offset: 3}} className="shadow border p-4 rounded bg-success">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setAuth({...auth, email: e.target.value})} value={auth.email} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setAuth({...auth, password:e.target.value})} value={auth.password} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Col>
         </Row>
    </div>
  )
}

export default Register