import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {Cell, Progress, Group, Div, InfoRow} from "@vkontakte/vkui";

const MyProgress = ({ id, go, donation }) => {
    const [text, setText] = useState('Помогите первым');
    const [progressValue, setProgressValue] = useState(0);
    const [currentAmount, setCurrentAmount] = useState(0)

    return (
        <Panel id={id}>
            <Cell before={
                <Group>
                    <Div style={{width: "100%"}}>
                        <InfoRow style={{width: "220px"}} header={text}>
                            <Progress value={progressValue}/>
                        </InfoRow>
                    </Div>
                </Group>} indicator={
                <Button mode="outline" onClick={() => {
                    setCurrentAmount(currentAmount + 200)
                    setText("Собрано " + currentAmount + " ₽ из " + donation.sum + " ₽")
                    console.info(donation.sum)
                    setProgressValue(currentAmount * 100 / Number.parseInt(donation.sum))
                }}>Помочь</Button>}>
            </Cell>
        </Panel>
    );
};

MyProgress.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    donation: PropTypes.shape({
        name: PropTypes.string,
        sum: PropTypes.string,
        target: PropTypes.string,
        description: PropTypes.string,
    })
};

export default MyProgress;
