import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {PanelHeaderBack} from '@vkontakte/vkui';
import {FormLayout, Input, Select, Textarea, File} from '@vkontakte/vkui';
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import DonationIcon from "./DonationIcon";

const RegularDonation = ({id, go, fetchedUser}) => (
    <Panel id={id}>
        <PanelHeader
            separator={false}
            left={<PanelHeaderBack onClick={go} data-to="ctype"/>}
        >
            Регулярный сбор
        </PanelHeader>
        <FormLayout>

            <DonationIcon>

            </DonationIcon>
            {/*<File*/}
            {/*    className="uploader"*/}
            {/*    mode="secondary"*/}
            {/*    before={<Icon56GalleryOutline/>}*/}
            {/*    controlSize="xl">*/}
            {/*    Загрузить обложку*/}
            {/*</File>*/}

            <Input
                type="name"
                top="Название сбора"
                placeholder="Название сбора"
            />

            <Input
                type="number"
                top="Сумма, ₽"
                placeholder="Сколько нужно собрать?"
            />

            <Input
                type="purpose"
                top="Цель"
                placeholder="Например, лечение человека"
            />

            <Textarea
                top="Описание"
                placeholder="На что пойдут деньги и как они кому-то помогут?"
            />

            <Select
                top="Куда получать деньги"
            >
                <option value="0">Счет VK Pay * 1234</option>
                <option value="1">Карта * 1337</option>
            </Select>

            <Select top="Автор" placeholder="Выберите автора">
                <option value="m">{fetchedUser.first_name} {fetchedUser.last_name}</option>
                <option value="f">Кто-то еще</option>
            </Select>

            <Button
                size="xl"
                onClick={go} data-to="additional"
            >
                Далее
            </Button>
        </FormLayout>
    </Panel>
);

RegularDonation.propTypes = {
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

export default RegularDonation;
