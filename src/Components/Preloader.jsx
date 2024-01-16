const Preloader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <lottie-player 
      src="https://lottie.host/69ee3867-4ec6-4981-89c2-8b9072b1226a/eqXRTtW4cr.json" 
      background="transparent" 
      speed="1" 
      style={{ width: '300px', height: '300px' }}
      direction="1" 
      mode="normal" 
      loop 
      autoplay></lottie-player>
    </div>
  );
};

export default Preloader;
