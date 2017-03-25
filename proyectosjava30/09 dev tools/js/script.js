const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log ('hello');

    // Interpolated
    console.log('hola yo soy una %s string!' ,'💩')

    // Styled
    console.log('%c texto shido prro', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue') 

    // warning!

    console.warn('LA CAGASTE MEN');

    // Error :|
    console.error('LA CAGASTE MEN X2');
    // Info
    console.info('si el profe lee esto me devera exentar del examen');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('epale'), 'no seleccionaste el elemento correcto');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log (`esto es ${dog.name}`);
      console.log (`${dog.name} tiene ${dog.age} años`);
      console.log (`${dog.name} tiene ${dog.age * 7} años perrunos`);
      console.groupEnd(`${dog.name}`)
    });
    

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);