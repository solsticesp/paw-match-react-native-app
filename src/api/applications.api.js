import { api } from './api';

export async function createApplication(applicationData) {
    const response = await api.post(
        '/applications',
        applicationData
    );

    return response.data[0];
}

export async function getSentApplications(userId) {
    const response = await api.get(
        `/applications?select=*,pets(id,name,age,image_url,categories(name))&applicant_id=eq.${userId}&order=created_at.desc`
    );

    return response.data;
}

export async function getReceivedApplications(userId) {
    const response = await api.get(
        `/applications?select=*,pets!inner(id,name,age,image_url,categories(name))&pets.user_id=eq.${userId}&order=created_at.desc`
    );

    return response.data;
}


export async function updateApplicationStatus(id, status) {
    const response = await api.patch(
        `/applications?id=eq.${id}`,
        { status }
    );

    return response.data[0];
}

export async function acceptApplication(applicationId) {
    const response = await api.post(
        '/rpc/accept_adoption_application',
        {
            application_id: applicationId,
        }
    );

    return response.data;
}
