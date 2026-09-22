function MapComponent() {
  return (
    <div className="w-full py-4 mt-6 overflow-hidden rounded-lg shadow-md h-96">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A413717bd62f1c652ffe4bb3a362380f16befcb8fea75a7e28da2bff615fa4eac&amp;source=constructor"
        width="100%" 
        height="400" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default MapComponent;
