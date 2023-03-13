import React, {ImgHTMLAttributes} from 'react';
import {getAsset} from "@/app/connector";
import styles from './Image.module.css';

interface Props extends ImgHTMLAttributes<any> {
    assetID: string;
}

const Image = async (props: Props) => {
    const image = await getAsset(props.assetID);
    if (!image) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            <img src={"https:" + image.file.url} title={image.title} alt={image.description} {...props} />
        </div>
    );
};

export default Image;