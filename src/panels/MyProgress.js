import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import {Cell, Progress, Group, Div, InfoRow} from "@vkontakte/vkui";

const MyProgress = ({ id, go, fetchedUser }) => (
    <Panel id={id}>
        <Cell before={
            <Group>
            <Div style={{width: "100%"}}>
                <InfoRow header="Помогите первым">
                    <Progress value={0} />
                </InfoRow>
            </Div>
        </Group>} indicator={
            <Button  mode="outline">Помочь</Button>}>
        </Cell>
    </Panel>
);

MyProgress.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default MyProgress;
