import { Button, Container, Group, Modal, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import AddLocation from '../AddLocation/AddLocation'

const AddPropertyModal = ({opened, setOpened}) => {
    const [activeStep, setActiveStep] = useState(0)
  return (
    <div>
      <Modal opened={opened} onClose={()=>setOpened(false)} closeOnClickOutside size={"90rem"}>
        {/* thêm khung add property */}
        <Container h={"40rem"} w={"100%"} >
            <Stepper active={activeStep} onStepClick={setActiveStep}>
            <Stepper.Step label="Địa chỉ" description="Thêm 1 địa chỉ mới">
                <AddLocation />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
            Step 2 content: Verify email
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
            Step 3 content: Get full access
            </Stepper.Step>
            <Stepper.Completed>
            Completed, click back button to get to previous step
            </Stepper.Completed>
        </Stepper>

        {/* <Group justify="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next step</Button>
        </Group> */}
        </Container>
      </Modal>
    </div>
  )
}

export default AddPropertyModal
