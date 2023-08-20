let count = 0;

function Message() {
    count++;
    return <h1>Hello {count}</h1>
} 

export default Message