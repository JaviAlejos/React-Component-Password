# React-Component-Password
React component to manage password input. Show/Hide, strength and auto-generate passwords

- Install

npm install react-component-password --save

- Features

  You can use by props:
    - Show/Hide: Hide by default
    - Value: Add a value by default
    - Numbers: Boolean, put numbers in password (by default -> false)
    - Length: length of password (by default -> 10)
    - symbols: Boolean, put symbols in password (by default -> false)
    - uppercase: Boolean, use uppercase letters in password (by default -> true)

  Also, you will see the strength of the password. This strength is calculate with zxcvbn library  

- Example:

    import AppPassword from 'react-component-password';

    < AppPassword show={true} value=“12345678” numbers=“true”/>
