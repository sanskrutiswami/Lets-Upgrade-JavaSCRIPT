let quotes =
[
'In every walk in with nature one receives far more than he seeks. ~ John Muir',
'By discovering nature, you discover yourself. ~ Maxime Lagacé',
'Love the world as your own self; then you can truly care for all things. ~ Lao Tzu',
'Nature is pleased with simplicity. And nature is no dummy. ~ Isaac Newton',
'Adopt the pace of nature. Her secret is patience. ~ Ralph Waldo Emerson',
'Heaven is under our feet as well as over our heads. ~ Henry David Thoreau',
'Normality is a paved road; it’s comfortable to walk, but no flowers grow. ~ Vincent van Gogh',
'Nature is an infinite sphere of which the center is everywhere and the circumference nowhere. ~ Blaise Pascal',
'Nature is the phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth, as opposed to humans or human creations. ~ Google',
'Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living. ~ Albert Einstein',
'There is an element of truth in everything. Nature teaches, although it can sometimes be misleading. ~ Bruce Lee',
'Solitude, isolation, are painful things and beyond human endurance. ~ Jules Verne.',
'One touch of nature makes the whole world kin. ~ William Shakespeare',
'And when all the wars are over, a butterfly will still be beautiful. ~ Ruskin Bond',
'How strange that nature does not knock, and yet does not intrude! ~ Emily Dickinson',
'They are much to be pitied who have not been given a taste for nature early in life. ~ Jane Austen',
'To forget how to dig the earth and to tend the soil is to forget ourselves. ~ Mahatma Gandhi',
'Birds have always had the ability to bring me out of a dark space and provide relief in bad times. ~ Jason Ward',
'Leave the roads; take the trails. ~ Pythagoras',
'Not just beautiful, though—the stars are like the trees in the forest, alive and breathing. And they’re watching me. ~ Haruki Murakami',
'But nature flies from the infinite; for the infinite is imperfect, and nature always seeks an end. ~ Aristotle',
'Everything has beauty, but not everyone sees it. ~ Confucious',
'He is richest who is content with the least, for content is the wealth of nature. ~ Socrates',
'If you love a flower which happens to be on a star, it is sweet at night to gaze at the sky. All the stars are a riot of flowers. ~ Antoine de Saint-Exupéry',
'Nature is the art of God. ~ Dante Alghieri',         

];

function myQuote(){
    let index=Math.floor(Math.random()*quotes.length);
    
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
    </div>
    `;
    div.innerHTML=quote;
    }
