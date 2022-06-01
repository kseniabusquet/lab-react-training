import {useState} from 'react'

function SignupPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isStrong, setIsStrong] = useState(false)

    const handleEmailInput = e => {
        setEmail(e.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setIsValid(true)
        }
        console.log('typed email: ', e.target.value);
        console.log('is valid ', isValid);
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value);
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (re.test(e.target.value)) setIsStrong(true)
        console.log('typed pw: ', e.target.value);
        console.log('Ís strong? ', isStrong)
    }

    const handleSelect = e => {
        setNationality(e.target.value);
        console.log('selected: ', e.target.value);
    }


    return (
        <div className="inputs sketchy">
            <p>Email Address</p>
            <input type="email" value = {email} placeholder="Type your email address..." onChange={handleEmailInput}></input>
            {isValid && <p className='valid'>You typed a valid email ✅ </p>}
            {!isValid && <p className='invalid'>Please enter a valid email address ❌ </p>}
            <p>Password</p>
            <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value = {password} placeholder="Type your password..." onChange={handlePasswordInput}></input>
            {isStrong && <p className='valid'>Your password is strong ✅ </p>}
            {!isStrong && <p className='invalid'>Your password is too weak ❌ </p>}

            <p>Nationality</p>
            <div>
                <select value = {nationality} onChange={handleSelect}>
                <option value = 'disabled'>Select your nationality</option>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            </div>

            <button className = 'signup-btn'type='submit'>Sign Up</button>

            {nationality === 'en' && <p>Hello 😀 </p>}
            {nationality === 'de' && <p>Hallo 😀 </p>}
            {nationality === 'fr' && <p>Bonjour 😀 </p>}

            <p>Your email address is:</p>
                <p><b>{email}</b></p>
            {isValid && <p className='valid'>Your email address is correct</p>}
        </div>
    )
}

export default SignupPage