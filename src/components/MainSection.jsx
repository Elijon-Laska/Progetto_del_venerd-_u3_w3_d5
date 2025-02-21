import MusicSection from "./MusicSection";

const MainSection = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <MusicSection artistName="Queen" sectionId="rockSection" />
        </div>
        <div className="col-10">
          <MusicSection artistName="Katy Perry" sectionId="popSection" />
        </div>
        <div className="col-10">
          <MusicSection artistName="Eminem" sectionId="hipHopSection" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
