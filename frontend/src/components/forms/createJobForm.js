import { styled } from "@mui/material/styles";
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from "@mui/material/TextField";
import axios from "axios";
import ToastPlaceholder from "../toast/ToastPlaceholder";
import { useToast } from "../toast/ToastContext";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import UploadFileForm from "./uploadFileForm";




const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& label": {
        color: "white",
    },
    "& input": {
        color: "white",
    },

    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
});

const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
};

function NewJobForm() {
    const toast = useToast();
    const [EndDate, setEndDate] = React.useState(new Date());
    const [profilePic, setprofilePic] = React.useState("");
    const [bannerPic, setBannerPic] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [name, setName] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [description, setdescription] = React.useState("");

    function updateTitle(e) {
        setTitle(e.target.value);
    }
    function updateName(e) {
        setName(e.target.value);
    }
    function updateCategory(e) {
        setCategory(e.target.value);
    }
    function updateDescription(e) {
        setdescription(e.target.value);
        console.log(e.target.value);
    }


    function submitJob() {
        const formRegisterData = new FormData();
        formRegisterData.append("name", name);
        formRegisterData.append("title", title);
        formRegisterData.append("category", category);
        formRegisterData.append("profilePic", profilePic);
        formRegisterData.append("bannerPic", bannerPic);
        formRegisterData.append("description", description);

        const date = new Date(EndDate);
        const timestamp = date.getTime() / 1000;
        console.log(timestamp);
        formRegisterData.append("endDate", timestamp);

        const URI = "http://127.0.0.1:8080/api/jobs/createJob";
        axios
            .post(URI, formRegisterData, config)
            .then((response) => {
                if (response.status == 200) {
                    toast.addToast("Success", "Successfully created job");
                }
            })
            .catch((error) => {
                toast.addToast("Failed", "Failed to create job: " + error);
            });

    }

    return (
        <div className="App">
            <p class="text-3xl font-bold text-white mb-4">Create new job offer</p>
            <ToastPlaceholder></ToastPlaceholder>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <div class="w-1/2 pr-2 text-white">
                        <CssTextField fullWidth margin="normal" type="text" id="jobName" onChange={updateTitle} label="Title of position" variant="outlined" required />
                        <CssTextField fullWidth margin="normal" type="text" id="jobName" onChange={updateCategory} label="Category" variant="outlined" required />
                        <CssTextField fullWidth margin="normal" type="text" id="jobName" onChange={updateDescription} label="Description" variant="outlined" required multiline/>
                        <div class="mt-6">
                            <p class="inline-flex text-xs font-thin text-gray-500 mb-2 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"> Upload image banner</p>
                            <UploadFileForm fileUrl={(e) => setBannerPic(e)} />
                        </div>
                    </div>
                    <div class="w-1/2 pl-2">
                        <CssTextField fullWidth margin="normal" type="text" onChange={updateName} id="jobName" label="Contact person - name" variant="outlined" required />
                        <div class="mt-4 text-white">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Valid until"
                                    value={EndDate}
                                    onChange={(newValue) => {
                                        setEndDate(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <CssTextField fullWidth variant="outlined" {...params} helperText={params?.inputProps?.placeholder} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div class="mt-2">
                            <p class="inline-flex text-xs font-thin text-gray-500 mb-2 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"> Upload profile picture</p>
                            <UploadFileForm fileUrl={(e) => setprofilePic(e)} />
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <button onClick={submitJob} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Submit job offer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewJobForm;