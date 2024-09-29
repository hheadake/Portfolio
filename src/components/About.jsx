import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 '>
        <img src={aboutSvg} className='transform hover:scale-105 transition-transform duration-300 w-full h-65' />
        <article>
          <SectionTitle text='learn and teach' />
          <p className='text-slate-600 mt-8 leading-loose'>
            As a elementary school teacher, I am deeply passionate about education and believe it needs to evolve to meet the demands of the modern world. My goal is to contribute to the modernization of the Bulgarian educational system by integrating innovative approaches and technologies. I have experience with modern web technologies such as React, JavaScript, Node.js, Angular, CSS, and HTML, which I believe can transform the way we teach and learn. I aim to combine my pedagogical experience with my technical skills to create sustainable solutions in education.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
