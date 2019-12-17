package com.android.sb_reminders;

public class Reminder {

    private int mId;
    private String mContent;
    private int mImportant;

    /**
     * Constructors
     */
    public Reminder() {
        // empty default constructor
    }

    public Reminder(int id, String content, int important) {
        mId = id;
        mImportant = important;
        mContent = content;
    }


    /**
     * setters and getters
     */
    public int getId() {
        return mId;
    }

    public void setId(int id) {
        mId = id;
    }

    public int getImportant() {
        return mImportant;
    }

    public void setImportant(int important) {
        mImportant = important;
    }

    public String getContent() {
        return mContent;
    }

    public void setContent(String content) {
        mContent = content;
    }

}
