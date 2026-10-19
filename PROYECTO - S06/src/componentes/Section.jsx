import Article from './Article';
import Aside from './Aside';

const Section = () => (
  <section className="section">
    <div className="articles-container">
      <Article />
      <Article />
    </div>
    <Aside />
  </section>
);
export default Section;