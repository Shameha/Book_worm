import image from '../../assets/images/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-4">
  <div className="hero-content flex-col lg:flex-row-reverse py-4">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold py-7">Books to freshen <br />up your bookshelf</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <button className="btn btn-primary py-4">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;