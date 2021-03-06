import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {PanelHeaderBack} from '@vkontakte/vkui';
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import SimpleCell from "@vkontakte/vkui/dist/components/SimpleCell/SimpleCell";

const Additional = ({id, go, fetchedUser, donation}) => (
    <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="targetDonation"/>}
                     className='panel'>
            Дополнительно
        </PanelHeader>

        <FormLayout>
            <Select top="Автор">
                <option value="m">{fetchedUser.first_name} {fetchedUser.last_name}</option>
                <option value="f">Мое любимое сообщество</option>
            </Select>

            <FormLayoutGroup top="Сбор завершится">
                <Radio name="type">Когда соберём сумму</Radio>
                <Radio name="type">В определённую дату</Radio>
            </FormLayoutGroup>

            <FormLayoutGroup top="Дата окончания">
                <Input type="date" defaultValue="Выберите дату"/>
            </FormLayoutGroup>
            <FixedLayout vertical="bottom">
                <Button size="xl" onClick={go} data-to="preview">Создать сбор</Button>
                <Separator style={{margin: '12px 0'}}/>
            </FixedLayout>
        </FormLayout>
    </Panel>
);

Additional.propTypes = {
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
    donation: PropTypes.shape({
        name: PropTypes.string,
        sum: PropTypes.string,
        target: PropTypes.string,
        description: PropTypes.string,
        file: PropTypes.string
    }),
};

export default Additional;
