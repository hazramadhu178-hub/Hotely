import { ArrowRight, BedDouble, Heart } from 'lucide-react';
import { Button, Photo } from './ui.jsx';
import { money } from '../hotelData.js';

export default function RoomCard({ room, region, saved, onSave, onOpen }) {
  return (
    <article className="room-card">
      <div className="room-media">
        <button className="room-image-button" type="button" onClick={() => onOpen(room)} aria-label={`View ${room.name} at Hotely Beach Resort`}>
          <Photo className="room-image" src={room.image} alt={`${room.name}, ${room.view.toLowerCase()} accommodation at Hotely`} />
        </button>
        <span className="room-badge">{room.category}</span>
        <button className={`save-hotel ${saved ? 'save-hotel--saved' : ''}`} type="button" aria-label={`${saved ? 'Remove' : 'Save'} ${room.name}${saved ? ' from favorites' : ' to favorites'}`} aria-pressed={saved} onClick={() => onSave(room.id)}>
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} strokeWidth={1.7} />
        </button>
      </div>
      <div className="room-body">
        <div className="room-facts">
          <span><strong>{money(room.price, region)}</strong><em>per night</em></span>
          <span><strong>{room.size} m²</strong><em>room size</em></span>
          <span><strong>{room.guests}</strong><em>guests max</em></span>
        </div>
        <h3><button type="button" onClick={() => onOpen(room)}>{room.name}</button></h3>
        <p className="room-meta"><BedDouble size={13} aria-hidden="true" />{room.beds}<span aria-hidden="true">/</span>{room.view}</p>
        <ul className="room-chips">{room.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="room-actions">
          <Button variant="outline" onClick={() => onOpen(room)}>View Room<ArrowRight size={15} /></Button>
          <button className="save-hotel-text" type="button" aria-pressed={saved} onClick={() => onSave(room.id)}>
            <Heart size={15} fill={saved ? 'currentColor' : 'none'} />{saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </article>
  );
}
