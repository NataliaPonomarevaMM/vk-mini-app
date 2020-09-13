import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {PanelHeaderBack} from '@vkontakte/vkui';
import {FormLayout, Input, Select, Textarea, File} from '@vkontakte/vkui';
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";
import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';

class TargetDonation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            description: '',
            target: '',
            image: null,
            buttonDisabled: true
        };
    }

    updateState() {
        if (this.state.name !== ''
            && this.state.target !== ''
            && this.state.sum !== ''
            && this.state.description !== '') this.setState({buttonDisabled: false});
        else this.setState({buttonDisabled: true});
        this.forceUpdate();
    }

    render() {
        const {id, go, fetchedUser} = this.props;
        return (
            <Panel id={id}>
                <PanelHeader
                    separator={false}
                    left={<PanelHeaderBack onClick={go} data-to="ctype"/>}
                >
                    Целевой сбор
                </PanelHeader>
                <FormLayout>

                    <File
                        accept="image/*"
                        className="uploader"
                        mode="secondary"
                        before={<Icon56GalleryOutline/>}
                        controlSize="xl">
                        Загрузить обложку
                    </File>

                    <Input
                        type="name"
                        top="Название сбора"
                        placeholder="Название сбора"
                        onChange={(e) => {
                            this.setState({name: e.target.value});
                        }}
                    />

                    <Input
                        type="number"
                        top="Сумма, ₽"
                        placeholder="Сколько нужно собрать?"
                        onChange={(e) => {
                            this.setState({sum: e.target.value});
                        }}
                    />

                    <Input
                        type="purpose"
                        top="Цель"
                        placeholder="Например, лечение человека"
                        onChange={(e) => {
                            this.setState({target: e.target.value});
                        }}
                    />

                    <Textarea
                        top="Описание"
                        placeholder="На что пойдут деньги и как они кому-то помогут?"
                        onChange={(e) => {
                            this.setState({description: e.target.value});
                        }}
                    />

                    <Select
                        top="Куда получать деньги"
                    >
                        <option value="0">Счет VK Pay · 1234</option>
                        <option value="1">Карта · 1337</option>
                    </Select>

                    <Button
                        size="xl"
                        disabled={this.state.name === ''
                        || this.state.target === ''
                        || this.state.sum === ''
                        || this.state.description === ''}
                        onClick={go} data-to="additional"
                    >
                        Далее
                    </Button>
                </FormLayout>
            </Panel>
        );
    }
}

TargetDonation.propTypes = {
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

export default TargetDonation;
