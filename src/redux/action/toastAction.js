import { toast } from 'react-toastify';

export const toastAction = {
  success: data => {
    if (data) {
      toast.success(data, { autoClose: 2000 });
    }
  },
  error: error => {
    if (error?.networkError?.result?.errors[0]?.message) {
      toast.error(error.networkError.result.errors[0].message);
    } else if (error) {
      toast.error(error);
    } else {
      toast.error('server error', { autoClose: 2000 });
    }
  },
};
