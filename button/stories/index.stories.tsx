import { Button } from '../index';
import { IconButton } from '../index';

export const primary = () => (
  <>
    <Button size="small" onClick={() => alert('Button pressed!')}>
      Small
    </Button>
    <Button size="medium" onClick={() => alert('Button pressed!')}>
      Medium
    </Button>
    <Button size="large" onClick={() => alert('Button pressed!')}>
      Large
    </Button>
  </>
);

// export const secondary = () => (
//   <>
//     <Button secondary size="small" onClick={() => alert('Button pressed!')}>
//       Small
//     </Button>
//     <Button secondary size="medium" onClick={() => alert('Button pressed!')}>
//       Medium
//     </Button>
//     <Button secondary size="large" onClick={() => alert('Button pressed!')}>
//       Large
//     </Button>
//   </>
// );

export const disabled = () => (
  <>
    <IconButton disabled size="small" onClick={() => alert('Button pressed!')}>
      Small
    </IconButton>
    <IconButton disabled size="medium" onClick={() => alert('Button pressed!')}>
      Medium
    </IconButton>
    <IconButton disabled size="large" onClick={() => alert('Button pressed!')}>
      Large
    </IconButton>
  </>
);
