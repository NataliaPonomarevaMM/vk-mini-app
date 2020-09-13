import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import {Div, PanelHeaderBack} from '@vkontakte/vkui';
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";

const Additional = ({ id, go}) => (
    <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>
            Дополнительно
        </PanelHeader>

        <FormLayout>
            <Select top="Автор" placeholder="Выберите автора">
                <option value="m">Матвей Правосудов</option>
                <option value="f">Кто-то еще</option>
            </Select>

            <FormLayoutGroup top="Сбор завершится">
                <Radio name="type">Когда соберём сумму</Radio>
                <Radio name="type">В определённую дату</Radio>
            </FormLayoutGroup>

            <FormLayoutGroup top="Дата окончания">
                <Input type="date" defaultValue="Выберите дату" />
            </FormLayoutGroup>
        </FormLayout>
    </Panel>
);

Additional.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Additional;