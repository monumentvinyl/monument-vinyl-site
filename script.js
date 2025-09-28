// Simple carousel (scroll by slide width)
const track = document.getElementById('carouselTrack');
let currentIndex = 0;
function moveCarousel(dir){
  const slides = track.querySelectorAll('.slide');
  if(!slides.length) return;
  currentIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + dir));
  const slideWidth = slides[0].getBoundingClientRect().width + 12; // gap
  track.scrollTo({ left: currentIndex * slideWidth, behavior: 'smooth' });
}

// basic search behavior (just filter cards client-side)
function onSearch(e){
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q) return;
  const cards = document.querySelectorAll('#productGrid .card');
  cards.forEach(card=>{
    const title = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
}
