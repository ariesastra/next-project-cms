// Dependencies
import {useState} from 'react'
import Switch from 'react-switch'

// Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleSwitch = ({ onChange }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
        setChecked(nextChecked)
        onChange()
    };

    return (
        <>
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#f8f8f9"
                offColor="#463b3a"
                onHandleColor="#463b3a"
                className="react-switch day-night-toggle"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 20
                        }}
                    >
                        <FontAwesomeIcon
                            inverse
                            icon="moon"
                            style={{
                                color: '#fff'
                            }}
                        />
                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 18,
                        }}
                    >
                        <FontAwesomeIcon
                            inverse
                            icon="sun"
                            style={{
                                color: '#000'
                            }}
                        />
                    </div>
                }
            />
        </>
    )
}

export default ToggleSwitch