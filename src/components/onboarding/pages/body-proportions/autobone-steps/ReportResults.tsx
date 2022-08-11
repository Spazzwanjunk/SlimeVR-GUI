import classNames from 'classnames';
import { useEffect } from 'react';
import { useAutobone } from '../../../../../hooks/autobone';
import { Button } from '../../../../commons/Button';
import { Typography } from '../../../../commons/Typography';

export function ReportResultsStep({
	nextStep, prevStep, backskipStep, doublebackskipStep, variant
}: {
	nextStep: () => void; prevStep: () => void; backskipStep: () => void; doublebackskipStep: () => void; variant: 'onboarding' | 'alone';
}) {
  const {
    startRecording,
  } = useAutobone();
  
  const redo = () => {
    startRecording();
    doublebackskipStep();
  };
  
  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-grow flex-col gap-4 max-w-sm">
          <Typography variant="main-title" bold>
            Something went wrong?
          </Typography>
          <div>
            <Typography color="secondary">
              Help make SlimeVR better by sending us your data!
            </Typography>
            <Typography color="secondary">Follow these steps to help us improve Autobone:
            </Typography>
            <Typography color="secondary">
			<i>"Evilscotch!: Idk, if the results look wrong or it doesn't move correctly then they can press the save recordings button, get the recording from the installation folder, then upload that to the Discord channel"</i>
            </Typography>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
			variant={variant === 'onboarding' ? 'secondary' : 'tierciary'} 
			onClick={backskipStep}
		  >
            Back to results
          </Button>
        <div className="flex gap-3">
          <Button
            variant={variant === 'onboarding' ? 'secondary' : 'tierciary'}
            onClick={redo}
          >
            Redo recording
          </Button>
        </div>
      </div>
		   <div className="flex gap-2">
          <Button
            variant={variant === 'onboarding' ? 'secondary' : 'tierciary'}
            // onClick={}
          >
            Save current recording
          </Button>
		  </div>
	  </div>
    </>
  );
}
