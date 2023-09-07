function getPilihanComputer() {
     const comp = Math.random();
     if(comp < 0.34 ) return 'kertas';
     if(comp >= 0.34 && comp < 0.67) return 'gunting';
     return 'batu';
}

function getHasil(player, comp) {
     if(player == comp) return 'SERI!';
     if(player == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
     if(player == 'kertas') return (comp == 'batu') ? 'MENANG!' : 'KALAH!';
     if(player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
     pil.addEventListener('click', function(){
          const pilihanComputer = getPilihanComputer();
          const pilihanPlayer = pil.className;
          const hasil = getHasil(pilihanPlayer, pilihanComputer);
          const hasilKomputer = document.querySelector('.img-computer');
          hasilKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
          
          const info = document.querySelector('.info');
          info.innerHTML = hasil;
     })
})
