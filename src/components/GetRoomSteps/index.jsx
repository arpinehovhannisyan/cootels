import { useState } from 'react';
import { Collapse, Icon, Panel } from './styles';
import Arrow from './Arrow';

const items = [
    {
        header: 'Choose a room and date',
        text: 'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
        header: 'Check for room availability',
        text: 'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
        header: 'Enjoy your room',
        text: 'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    }
]



function GetRoomSteps() {
    const [openPanel, setOpenPanel] = useState(1);

    return (
        <Collapse >
            {items.map((item, i) =>
                <Panel key={item.header} isOpen={i === openPanel}>
                    <div>{i + 1}. {item.header}</div>
                    <p>{item.text}</p>
                    <Icon 
                        onClick={() => {
                            setOpenPanel(i === openPanel ? -1 : i)
                        }}
                    >
                        <Arrow />
                    </Icon>
                </Panel>
                )}
        </Collapse>
    )
}



export default GetRoomSteps;