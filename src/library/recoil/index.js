import { RecoilRoot } from 'recoil'
import Use from './Use'

function Recoil() {
  return (
    <>
    <hr />
    <h3>RECOIL</h3>
      <RecoilRoot>
        <Use />
      </RecoilRoot>
    </>
  );
}

export default Recoil