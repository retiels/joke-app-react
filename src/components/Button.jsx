import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./Button.css";

function sayHello() {
    alert('Hello from React..!!');
  }

function Button() {
    const [jokeList, setJoke] = useState('');
    
    const fetchJoke = async () => {
        const api_joke_url = "https://official-joke-api.appspot.com/jokes/ten";

        try {
        const response = await fetch(api_joke_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data)
        
        const jokeList = data.map(joke_data => {
            return <Card title={joke_data.setup} description={joke_data.punchline}/>
        });
        setJoke(jokeList);

        } catch (error) {
        console.error('Error:', error);
        }
    }

    const fetchSingleJoke = async () => {
        const api_joke_url = "https://official-joke-api.appspot.com/jokes/random";

        try {
        const response = await fetch(api_joke_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const jokeList = <Card title={data.setup} description={data.punchline}/>;
        setJoke(jokeList);

        } catch (error) {
        console.error('Error:', error);
        }
    }

    // useEffect(() => {
    // fetchJoke();
    // }, []);

  return (
    <div>
        <button className='button' onClick={fetchSingleJoke}>
            Generate 1 Joke
        </button>
        <button className='button' onClick={fetchJoke}>
            Generate 10 Joke's
        </button>
        <div className='container'>
            {jokeList}
            {/* <Card title={joke.setup} description={joke.punchline}/> */}
        </div>
    </div>
  )
}

export default Button