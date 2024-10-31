let punkty = 0;
        let liczba;

        function podzielna7(num) {
            return num % 7 === 0;
        }
        function ma7(num) {
            return num.toString().includes('7');
        }
        function losuj() {
            liczba = Math.floor(Math.random() * 100) + 1;
            document.getElementById('liczbaWyswietlona').innerText = `Liczba: ${liczba}`;
        }
        document.getElementById('dzikButton').addEventListener('click', function() {
            if (podzielna7(liczba)||ma7(liczba)) {
                punkty++;
                document.getElementById('punkty').innerText = punkty;
            } 
            else {
                document.getElementById('przegrana').style.display = 'block';
            }
        });
        setInterval(losuj, 3000);
        losuj();