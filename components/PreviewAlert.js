// Style
import {Alert} from 'react-bootstrap'

export default function PreviewAlert() {
    
    return (
        <Alert variant='secondary'>
            This is Preview Mode !
             {/* TODO: This Will lead me to API route 
             that will remove preview Cookies */}
            <Alert.Link href="/api/exit-preview" className="ml-2">
                Leave Preview Mode
            </Alert.Link>
        </Alert>
    )
}