export default function MapEmbed() {
  return (
    <div className="w-full mt-10">
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64 border-0"
        loading="lazy"
      />
    </div>
  );
}
