import Buttons from "../Button/Button";
import "./ButtonPage.css";

const ButtonPage = () => {
  return (
    <div className='buttonpage'>
      <h1>Buttons</h1>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button /&gt;</p>
          <Buttons />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&:hover, &:focus</p>
          <Buttons />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button variant='outline' /&gt;</p>
          <Buttons variant='outline' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&:hover, &:focus</p>
          <Buttons variant='outline' />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button variant='text' /&gt;</p>
          <Buttons variant='text' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&:hover, &:focus</p>
          <Buttons variant='text' />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button disabledShadow /&gt;</p>
          <Buttons disableShadow />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button disabled /&gt;</p>
          <Buttons disabled />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button variant="text" disabled /&gt;</p>
          <Buttons variant='text' disabled />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button startIcon='camera' /&gt;</p>
          <Buttons startIcon='camera' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button endIcon='camera' /&gt;</p>
          <Buttons endIcon='camera' />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button size='sm' /&gt;</p>
          <Buttons size='sm' color='primary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button size='md' /&gt;</p>
          <Buttons size='md' color='primary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button size='lg' /&gt;</p>
          <Buttons size='lg' color='primary' />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button color="default" /&gt;</p>
          <Buttons color='default' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button color="primary" /&gt;</p>
          <Buttons color='primary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button color="secondary" /&gt;</p>
          <Buttons color='secondary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>&lt;Button color="danger" /&gt;</p>
          <Buttons color='danger' />
        </div>
      </div>

      <div className='buttonRow'>
        <div className='buttonbox'>
          <p className='headings'>&:hover, &:focus</p>
          <Buttons color='default' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>
            <br />
          </p>
          <Buttons color='primary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>
            <br />
          </p>
          <Buttons color='secondary' />
        </div>
        <div className='buttonbox'>
          <p className='headings'>
            <br />
          </p>
          <Buttons color='danger' />
        </div>
      </div>

      <p className='footer'>
        created by <span className='username'>RhythemParashar</span> -
        devChallenges.io
      </p>
    </div>
  );
};
export default ButtonPage;
