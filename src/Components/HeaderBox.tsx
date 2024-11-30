import background from '../assets/Background.jpg';
import '../Components/styles/HeaderBox.css';

const HeaderBox = () => {
  return (
    <div>
      <div
        className="bg-white border border-gray-200 rounded-lg shadow header-box-styles"
        style={{
          backgroundImage: `url(${background})`,
        }}>
        <div className="p-5">
          <p className="mt-14 font-bold text-gray-700 text-5xl ">
            Consigue la mejor calidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
