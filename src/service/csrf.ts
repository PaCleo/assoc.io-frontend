function csrf() {
        return fetch('http://localhost:3000/auth/csrf')
            .then(response => response.json())
}

export default csrf