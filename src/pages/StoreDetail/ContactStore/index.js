import React from 'react';

import { ViewRow, ItemText, ItemTextBold } from '../styles';

const ContactStore = ({name, data}) => {
    return (
        <ViewRow>
            <ItemTextBold>{name}:</ItemTextBold>
            <ItemText> {data}</ItemText>
        </ViewRow>);
}

export default ContactStore;