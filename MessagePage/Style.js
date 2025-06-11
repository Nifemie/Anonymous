export const styles = {
    body: {
        width: '100%',
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box'
    },
    messageContainer: {
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        width: '100%',
        maxWidth: '500px',
        boxSizing: 'border-box'
    },
    title: {
        fontSize: '28px',
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: '30px',
        margin: '0 0 30px 0'
    },
    messageInput: {
        width: '100%',
        minHeight: '200px',
        padding: '20px',
        border: '2px solid #e2e8f0',
        borderRadius: '12px',
        fontSize: '16px',
        fontFamily: 'inherit',
        resize: 'vertical',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        background: '#f8fafc',
        color: '#4a5568',
        boxSizing: 'border-box'
    },
    sendButton: {
        width: '100%',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        padding: '16px 24px',
        fontSize: '18px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxSizing: 'border-box'
    },
    sendButtonDisabled: {
        opacity: '0.8',
        cursor: 'not-allowed'
    },
    privacyFeatures: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    },
    privacyItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: '#718096',
        fontSize: '14px'
    },
    privacyIcon: {
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#edf2f7',
        borderRadius: '50%',
        fontSize: '12px'
    },
    shieldIcon: {
        color: '#4299e1'
    },
    lockIcon: {
        color: '#38a169'
    }
};