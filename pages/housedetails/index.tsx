import React, {ReactElement, useState} from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import SmallImage from '../../components/SmallImage/SmallImage';
import DetailComponent from '../../components/DetailComponent/DetailComponent';

const housePics = ['/house-1.jpg', '/house2b.jpg', '/furniture.jpg', '/home2.jpg', '/house3.jpg', '/chairs.jpg']
const features = ['5000l tank', 'geiser']

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        // width: 400,
        // backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
}));

function HouseDetails():ReactElement{
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <HomeLayout page_title="House Details">
             <div className="propertydetails px-32 py-8">
                <p className="text-2xl text-gray-800 mb-4 font-semibold">Details of property</p>
                <div className="flex flex-row items-center mb-8">
                    {features.map(feature => (
                        <FeatureItem
                            feature={feature}
                        />
                    ))}
                </div>

                <div className="propertyimages mb-16">
                    {/* images for preview */}
                    <div className="grid grid-cols-4 gap-3">
                        <span onClick={handleOpen} className="col-span-3 cursor-pointer bg-blue-light h-64 rounded-xl" style={{
                            backgroundImage: `url(${housePics[0]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}></span>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <img src={housePics[0]} alt="" className="w-full" />
                            </div >
                        </Modal>
                        {housePics.length <= 5 ? (
                            <div className="col-span-1 grid grid-cols-2 gap-3">
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[1]}
                                />
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[2]}
                                />
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[3]}
                                />
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[4]}
                                />
                            </div>
                        ) : (
                            <div className="col-span-1 grid grid-cols-2 gap-3">
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[1]}
                                />
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[2]}
                                />
                                <SmallImage
                                    className="col-span-1"
                                    picture={housePics[3]}
                                />
                                <span className=" bg-gray-200 rounded-xl relative cursor-pointer">
                                    <div className="col-span-1 w-full h-full absolute grid items-center rounded-xl">
                                        <p className="text-center font-semibold text-black">More</p>
                                    </div>
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* below the image */}
                <p className="text-xl text-gray-800 font-semibold">Details</p>
                <div className="details">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3 pt-8">
                            <div className="grid grid-cols-4 gap-5 mb-8">
                                {/* number of peaople */}
                                <DetailComponent
                                    className="grid-cols-1"
                                    icon={<PersonOutlineOutlinedIcon />}
                                    detail="2 Adults"
                                />

                                {/* space available */}
                                <DetailComponent
                                    className="grid-cols-1"
                                    icon={<AspectRatioOutlinedIcon />}
                                    detail="300 sqrM"
                                />

                                {/* rooms available */}
                                <DetailComponent
                                    className="grid-cols-1"
                                    icon={<MeetingRoomOutlinedIcon />}
                                    detail="5 Rooms"
                                />

                                {/* beds availbale */}
                                <DetailComponent
                                    className="grid-cols-1"
                                    icon={<KingBedOutlinedIcon />}
                                    detail="9 Beds"
                                />
                            </div>
                            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Cum perferendis in unde tempore magni? Aliquid quia,
                            ea magnam dolores velit nesciunt optio? Dolores eum reiciendis nemo!
                            Maiores, porro? In, vel.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Eos, mollitia libero rem odio veniam praesentium consequuntur, cupiditate odit non et, pariatur facilis dolore
                            sunt adipisci quidem consectetur numquam velit quas!
                                </p>
                        </div>
                        <div className="col-span-1">
                            <div className="border-2 border-gray-200 rounded-xl py-2">
                                <p className="text-blue-light text-xl font-semibold px-2">$77 / night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default HouseDetails
