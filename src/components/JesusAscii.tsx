import React from 'react';

const JesusAscii = () => {
  return (
    <pre className="font-mono text-matrix-primary text-xs sm:text-sm md:text-base whitespace-pre animate-glitch select-none">
      {`
                    ┏━━━━┓
                    ┃    ┃
               ┏━━━━┛    ┗━━━━┓
               ┃              ┃
          ┏━━━━┛              ┗━━━━┓
          ┃      ┏━━━━━━━━┓      ┃
     ┏━━━━┛      ┃ ┏━━━┓ ┃      ┗━━━━┓
     ┃           ┃ ┃  ┃ ┃           ┃
     ┃           ┃ ┃  ┃ ┃           ┃
     ┃           ┗━┛  ┗━┛           ┃
     ┃    ┏━━━━━━━━    ━━━━━━━━┓   ┃
     ┃    ┃                     ┃   ┃
     ┃    ┃    ╺━━━━━━━━━╸     ┃   ┃
     ┃    ┃                     ┃   ┃
     ┃    ┗━━━━━━━━    ━━━━━━━━┛   ┃
     ┃           ┏━┓  ┏━┓           ┃
     ┃           ┃ ┃  ┃ ┃           ┃
     ┃           ┃ ┃  ┃ ┃           ┃
     ┗━━━━┓      ┗━┛  ┗━┛      ┏━━━━┛
          ┃                     ┃
          ┗━━━━┓          ┏━━━━┛
               ┃          ┃
               ┗━━━━┓┏━━━━┛
                    ┃┃
                    ┗┛
      `}
    </pre>
  );
};

export default JesusAscii;